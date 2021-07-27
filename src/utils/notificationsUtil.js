import { store } from 'react-notifications-component';

const notification = {
  type: 'default',
  insert: 'center',
  container: 'top-right',
  animationIn: ['animate__animated', 'animate__fadeIn'],
  animationOut: ['animate__animated', 'animate__fadeOut'],
  dismiss: {
    duration: 3000,
    onScreen: true,
    showIcon: true,
  },
};

export const createSuccessNotification = (newNotification) => {
  const { title, message } = newNotification;

  store.addNotification({
    ...notification,
    type: 'success',
    title,
    message,
  });
};

export const createDangerNotification = (newNotification) => {
  const { title, message } = newNotification;

  store.addNotification({
    ...notification,
    type: 'danger',
    title,
    message,
  });
};
