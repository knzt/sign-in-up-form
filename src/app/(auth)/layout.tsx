export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex h-screen w-full flex-col justify-between bg-primary lg:flex-row-reverse '>
      <div className='max-w-screen relative min-h-[40vh] bg-login bg-cover bg-center max-sm:rounded-bl-[2rem] lg:min-h-screen lg:min-w-[56vw] lg:max-w-[1/2]'></div>
      {children}
    </div>
  );
}
