import { Toaster as Sonner } from "sonner"

const Toaster = ({
  ...props
}) => {
  return (
    <Sonner
      theme="dark"
      position="top-right"
      className="toaster group"
      toastOptions={{
        style: {
          background: '#141519',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          color: '#ffffff',
          fontSize: '14px',
          fontFamily: 'Inter, sans-serif',
          borderRadius: '12px',
        },
        classNames: {
          toast: "group toast",
          description: "group-[.toast]:text-gray-400",
          actionButton: "group-[.toast]:bg-blue-500 group-[.toast]:text-white",
          cancelButton: "group-[.toast]:bg-gray-600 group-[.toast]:text-gray-200",
          success: "group-[.toast]:border-green-500",
          error: "group-[.toast]:border-red-500",
        },
      }}
      {...props} 
    />
  );
}

export { Toaster }
