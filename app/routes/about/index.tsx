const AboutPage = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-6 bg-gray-900 py-16">
        {/*INTRO*/}
        <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
          />
          <div>
            <h1 className="text-3xl font-bold text-white">
              Hello, My name is Stanislav
            </h1>
            <p className="text-gray-300 text-lg">
              I'm a passionate web developer who loves building friendly digital
              experiences and looking to get hired
            </p>
          </div>
        </div>
        {/*BIO */}
        <div className="mb-12 ">
          <h2 className="text-2xl font-semiold text-white mb-4">My Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            Always learning and eager to learn new things, whether it is
            programming or discovering the world around me, looking for a
            fulfilling work!
          </p>
        </div>
        {/*Tech Stack */}

        <h2 className="text-2xl font-semibold text-white mb-4">
          🚀 The Tech I Use 🚀
        </h2>
        <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
          {[
            'React',
            'Next.js',
            'Vue',
            'tailwind CSS',
            'Node.js',
            'MongoDB',
            'C#',
            'Bash',
            'PyCharm',
          ].map((tech) => (
            <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AboutPage;
