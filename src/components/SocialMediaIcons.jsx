const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/shubham-mishra-75340a24b/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/babubisleri001"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="/assets/github.png" />
      </a>
       <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/babu_bisleri.01/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://leetcode.com/u/Shubham_15_/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="leetcode-link" src="../assets/leetcode.png" />
      </a> 
     
    </div>
  );
};

export default SocialMediaIcons;
