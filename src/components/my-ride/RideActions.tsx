import React from 'react';
import { AlertCircle } from 'lucide-react';
import styles from '../../app/my-ride/page.module.css';

interface RideActionsProps {
  onChangeDestination: () => void;
  onCancelRide: () => void;
}

const RideActions: React.FC<RideActionsProps> = ({
  onChangeDestination,
  onCancelRide,
}) => {
  const handleCancelClick = () => {
    if (window.confirm('Are you sure you want to cancel this ride?')) {
      onCancelRide();
    }
  };

  return (
    <div className={styles.actionButtons}>
      <button
        type="button"
        className={styles.primaryButton}
        onClick={onChangeDestination}
      >
        Change Destination
      </button>
      <button
        type="button"
        className={styles.cancelButton}
        onClick={handleCancelClick}
      >
        <AlertCircle size={16} />
        Cancel Ride
      </button>
    </div>
  );
};

export default RideActions;
