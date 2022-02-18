export const resetNotificationState = (
  setNotification: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  setNotification(true);

  setTimeout(() => {
    setNotification(false);
  }, 3000);
};
