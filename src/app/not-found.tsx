import Error404 from '@/components/svgs/404';

export default function NotFound() {
  return (
    <div className='text-new-primary bg-primary flex h-screen flex-col items-center gap-y-4 max-sm:justify-center 2xl:justify-center'>
      <Error404 className='max-sm:h-[300px] max-sm:w-[300px]' />
      <h1 className='animate-text w-full bg-gradient-to-r from-teal-500 via-purple-500 to-[#C977D6] bg-clip-text text-center text-lg font-semibold text-transparent lg:text-3xl lg:font-bold'>
        Página não encontrada
      </h1>
    </div>
  );
}
