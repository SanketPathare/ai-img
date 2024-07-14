const style = {
  gradientText: {
    background: 'linear-gradient(45deg, #3498db, #b34fa6, #00249b)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
};

const HamiLogo = ({}) => {
  return (
    <h1 className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-6xl text-center " style={style.gradientText}>
     Course Studio Image Generation
    </h1>
  );
};

export default HamiLogo;
