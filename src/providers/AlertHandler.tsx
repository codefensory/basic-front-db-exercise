import { PropsWithChildren, useEffect } from "react";
import { useAlertStore } from "../modules/shared/alertStore";

let isMount = false;

export const AlertHandler = ({ children }: PropsWithChildren) => {
  const alerts = useAlertStore((state) => state.alerts);

  const removeFirst = useAlertStore((state) => state.removeFirst);

  useEffect(() => {
    isMount = true;
    return () => {
      isMount = false;
    };
  }, []);

  useEffect(() => {
    if (alerts.length === 0) {
      return;
    }

    setTimeout(() => {
      if (!isMount) {
        return;
      }

      removeFirst();
    }, 3000);
  }, [alerts, removeFirst]);

  return (
    <>
      {children}
      <div className="toast toast-top toast-center z-30">
        {alerts.map((alert, index) => (
          <div key={index} className={`alert ${alert.type}`}>
            <span>{alert.text}</span>
          </div>
        ))}
      </div>
    </>
  );
};
