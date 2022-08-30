const PageSkeleton = () => {
  return (
    <div className="min-h-screen max-w-5xl px-10 md:px-16 mx-auto mt-16 pb-20">
      <main className="mx-auto max-w-5xl grid grid-cols-1 md:gap-8 md:grid-cols-12 py-12 mb-8">
        <section className="col-span-1 md:col-span-7">
          <div className="md:sticky md:top-[121px] space-y-8">
            <section className="mb-8">
              <div className="flex justify-center">
                <div className="w-[300px] h-[400px] skeleton" />
              </div>
            </section>
            <div className="mb-8 md:hidden space-y-4">
              <div className="h-5 w-[100px] skeleton" />
              <div className="h-10 max-w-[500px] skeleton" />
              <div className="h-10 max-w-[300px] skeleton" />
              <div className="h-5 w-[200px] skeleton" />
            </div>
            <div className="md:hidden mb-16 bg-white dark:bg-black-2 shadow-md py-8 px-4 lg:px-6 rounded-md space-y-4">
              <div className="h-5 w-[100px] skeleton" />
              <div className="h-10 w-[200px] skeleton" />
              {[0, 1, 2, 3, 4].map((num, i) => (
                <div key={num} className="h-5 max-w-[500px] skeleton" />
              ))}
            </div>
            <div className="bg-white dark:bg-black-2 shadow-md py-8 px-4 lg:px-6 rounded-md space-y-3">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, i) => (
                <div key={num} className="h-5 max-w-[500px] skeleton" />
              ))}
            </div>
          </div>
        </section>
        <section className="col-span-1 md:col-span-5">
          <div className="md:sticky md:top-[121px] space-y-8">
            <div className="mb-8 hidden md:block space-y-4">
              <div className="h-5 w-[100px] skeleton" />
              <div className="h-10 max-w-[500px] skeleton" />
              <div className="h-10 max-w-[300px] skeleton" />
              <div className="h-5 w-[200px] skeleton" />
            </div>
            <div className="hidden md:block mb-16 bg-white dark:bg-black-2 shadow-md py-8 px-4 lg:px-6 rounded-md space-y-4">
              <div className="h-5 w-[100px] skeleton" />
              <div className="h-10 w-[200px] skeleton" />
              {[0, 1, 2, 3, 4].map((num, i) => (
                <div key={num} className="h-5 max-w-[500px] skeleton" />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PageSkeleton;
