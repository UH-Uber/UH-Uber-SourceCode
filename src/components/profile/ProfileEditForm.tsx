'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import type { User } from '@/types/user';

interface ProfileEditFormProps {
  user: User;
}

export function ProfileEditForm({ user }: ProfileEditFormProps) {
  const router = useRouter();
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to update profile');

      router.refresh();
      router.push('/profile');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Card className="mt-4">
        <Card.Header>
          <h2>{user.name ? 'Edit Profile' : 'Complete Your Profile'}</h2>
          {!user.name && (
            <p className="text-muted">
              Please complete your profile to continue using UH Manoa Ride Share
            </p>
          )}
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </Form.Group>
              </Col>
              
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={formData.email}
                    disabled
                  />
                  <Form.Text className="text-muted">
                    Email cannot be changed
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="(808) XXX-XXXX"
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Pronouns</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.pronouns}
                    onChange={(e) => setFormData(prev => ({ ...prev, pronouns: e.target.value }))}
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
                onChange={(e) => setFormData(prev => ({ ...prev, campusLocation: e.target.value }))}
                placeholder="e.g., Manoa Campus"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={formData.bio}
                onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                placeholder="Tell us about yourself..."
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Profile Image URL</Form.Label>
              <Form.Control
                type="text"
                value={formData.avatarUrl}
                onChange={(e) => setFormData(prev => ({ ...prev, avatarUrl: e.target.value }))}
                placeholder="https://example.com/your-image.jpg"
              />
            </Form.Group>

            <div className="d-flex justify-content-end gap-2">
              {user.name && (
                <Button
                  variant="secondary"
                  onClick={() => router.back()}
                >
                  Cancel
                </Button>
              )}
              <Button
                type="submit"
                variant="success"
                disabled={isLoading}
              >
                {isLoading ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}