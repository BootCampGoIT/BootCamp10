
const CoursesList = ({courses}) => {
  return (
    <ul className='coursesList'>
      {courses.map(({ id, name, modules }) => (
        <li key={id}>
          <h2>{name}</h2>
          <ul className='modulesList'>
            {modules.map(({ name, repository, webinar }) => (
              <li key={name}>
                <h3>{name}</h3>
                {/* <iframe
                  width='560'
                  height='315'
                  src={webinar}
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen></iframe> */}
                <a href={repository}>Reference</a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default CoursesList;
