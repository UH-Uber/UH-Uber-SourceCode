'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  Toast,
  Alert,
} from 'react-bootstrap';
import type { User } from '@/types/user';

interface ProfileEditFormProps {
  user: User;
}

export default function ProfileEditForm({ user }: ProfileEditFormProps) {
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: user.name || '',
    email: user.email,
    avatarUrl: user.avatarUrl || '',
    bio: user.bio || '',
    phone: user.phone || '',
    pronouns: user.pronouns || '',
    campusLocation: user.campusLocation || '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Basic form validation
  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!formData.phone.trim()) {
      setError('Phone number is required');
      return false;
    }
    // Basic phone number validation (Hawaii format)
    const phoneRegex = /^\(\d{3}\)\s?\d{3}-\d{4}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('Phone number must be in format (808) XXX-XXXX');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSubmitted(true);

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to update profile');
      }

      // Successful update
      router.refresh();
      router.push('/profile');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update profile');
      setShowToast(true);
    } finally {
      setIsLoading(false);
    }
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const numbers = value.replace(/\D/g, '');
    // Format as (XXX) XXX-XXXX
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  return (
    <Container>
      <Card className="mt-4">
        <Card.Header>
          <h2>{user.name ? 'Edit Profile' : 'Complete Your Profile'}</h2>
          {!user.name && (
            <p className="text-muted">
              Please complete your profile to continue using UH Manoa Ride Share.
              Fields marked with * are required.
            </p>
          )}
        </Card.Header>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Name *</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    isInvalid={submitted && !formData.name.trim()}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Name is required
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={formData.email} disabled />
                  <Form.Text className="text-muted">
                    Email cannot be changed
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number *</Form.Label>
                  <Form.Control
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({
                      ...prev,
                      phone: formatPhoneNumber(e.target.value),
                    }))}
                    placeholder="(808) XXX-XXXX"
                    isInvalid={
                      submitted && (!formData.phone.trim()
                      || !/^\(\d{3}\)\s?\d{3}-\d{4}$/.test(formData.phone))
                    }
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Valid phone number is required (format: (808) XXX-XXXX)
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Pronouns</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.pronouns}
                    onChange={(e) => setFormData((prev) => ({
                      ...prev,
                      pronouns: e.target.value,
                    }))}
                    placeholder="e.g., they/them"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Campus Location</Form.Label>
              <Form.Control
                type="text"
                value={formData.campusLocation}
                onChange={(e) => setFormData((prev) => ({
                  ...prev,
                  campusLocation: e.target.value,
                }))}
                placeholder="e.g., Manoa Campus"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={formData.bio}
                onChange={(e) => setFormData((prev) => ({ ...prev, bio: e.target.value }))}
                placeholder="Tell us about yourself..."
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Profile Image URL</Form.Label>
              <Form.Control
                type="text"
                value={formData.avatarUrl}
                onChange={(e) => setFormData((prev) => ({
                  ...prev,
                  avatarUrl: e.target.value,
                }))}
                placeholder="https://example.com/your-image.jpg"
              />
            </Form.Group>

            <div className="d-flex justify-content-end gap-2">
              {user.name && (
                <Button
                  variant="secondary"
                  onClick={() => router.push('/profile')}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
              )}
              <Button type="submit" variant="success" disabled={isLoading}>
                {isLoading ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
        style={{ position: 'fixed', bottom: 20, right: 20 }}
      >
        <Toast.Header>
          <strong className="me-auto">Error</strong>
        </Toast.Header>
        <Toast.Body>{error || 'Failed to update profile. Please try again.'}</Toast.Body>
      </Toast>
    </Container>
  );
}
