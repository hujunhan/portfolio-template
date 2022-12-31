let info = {
  name: "Junhan Hu",
  logo_name: "Hu",
  flat_picture: require("./src/assets/pt.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I am an Algorithm Development Engineer @OmniVision where I focused on image processing from RAW data and transform it to a displayable image format(like JPG).  When I have time, I enjoy building robots and photograph",
  links: {
    linkedin: "https://www.linkedin.com/in/junhan-hu/",
    github: "https://github.com/hujunhan",
    angellist: "https://angel.co/u/junhan-hu-1",
    resume:
      "https://drive.google.com/file/d/1Xej09DnYGuByA7AtAq2rfAbUd8RwHPxi/view?usp=sharing"
  },
  education: [
    {
      name: "Georgia Institute of Technology",
      place: "Atlanta, GA, USA",
      date: "Aug, 2020 - May, 2022",
      degree: "Masters in Electrical and Computer Engineering",
      gpa: "3.7/4.0",
      description:
        "A great time in Atlanta, while specializing in the field of Computer Vision and Signal Processing",
      skills: [
        "Artificial Intelligence",
        "Software Engineering",
        "Algorithms",
        "Computer Vision",
        "OS"
      ]
    },
    {
      name: "Zhejiang University",
      place: "Hangzhou, ZJ, China",
      date: "Aug, 2016 - May, 2020",
      degree: "Bachelors in Automation",
      gpa: "3.7/4.0",
      description:
        "A place I would alway miss",
      skills: [
        "AI",
        "Neural Netwroks",
        "Data Mining",
        "Computer Vision",
        "Pattern Recognition",
        "HCI",
        "Software Engineering"
      ]
    }
  ],
  experience: [
    {
      name: "Image Signal Processing Pipeline Development",
      place: "Bay Area, California",
      date: "July, 2022 - Present",
      position: "Algorithm Development Engineer",
      description:
        "Worked as a Algorithm Development Engineer for the camera pipeline. Image data from CMOS sensor is processed by various module like de-mosaic, denoise, enhancement and tone-mapping to get a displayable image",
      skills: ["Signal Processing", "C++", "Python", "Shell"]
    },
    {
      name: "Robotics Algorithm Development",
      place: "Shenzhen, China",
      date: "May, 2021 - July, 2021",
      position: "Robotics Algorithm Engineer",
      description:
        "Worked as a Robotics Engineer, implementing computer vision and pose estimation algorithm to help the assembly line robot work fully autonomously",
      skills: ["Computer Vision", "Pose Estimation", "Robotics", "ROS", "Python","OpenCV"]
    },
    {
      name: "Robot Industry Research",
      place: "Shenzhen, China",
      date: "Dec, 2020 - Mar, 2021",
      position: "Industry Researcher",
      description:
        "Analyze robot-related field and industry's market and the role it plays in the downstream and upstream of robot",
      skills: ["Robot", "Market", "Big Data", "Financial Report"]
    },
  ],
  skills: [
    {
      title: "languages",
      info: [
        "Python",
        "C++",
        "C",
        "Java",
        "SQL",
        ""
      ],
      icon: "fa fa-code"
    },
    {
      title: "data frameworks",
      info: [
        "Numpy",
        "Pandas",
        "OpenCV",
        "SciPy",
        "Sklearn",
        "Scikit-learn",
        "Pillow"
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["Vue", "Angular", "React", "Node", "Flask", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["MongoDB", "MySQL", "OracleSQL", "Neo4j"],
      icon: "fa fa-database"
    },
    {
      title: "operating systems & tools",
      info: [
        "MacOS",
        "Ubuntu",
        "Windows",
        "Android",
        // "Agile",
        // "Scrum",
        // "JIRA",
        // "Heroku",
        // "Firebase",
        // "AWS S3"
      ],
      icon: "fas fa-tools"
    },
    // {
    //   title: "design",
    //   info: ["Illustrator", "XD", "Photoshop", "Final Cut Pro"],
    //   icon: "fa fa-pencil-square-o"
    // }
  ],
  portfolio: [
    {
      name: "Virtual Camera",
      pictures: [
        {
          img: require("./src/assets/portfolio/virtual_camera/virtual-camera-1.jpg")
        },
      ],
      technologies: ["Computer Vision", "OpenCV", "Python", ],
      category: "Algorithm",
      date: "Jan, 2020 - Mar, 2020",
      github:
        "https://github.com/hujunhan/Virtual-Camera",
      visit: "https://github.com/hujunhan/Virtual-Camera",
      description:
        "A virtual camera simulator that simulate the pin-hole camera model. The program project 3D points coordinates into pixel coordinates. It's useful in simulation to validate computer vision algorithm like pose estimation and registration"
    },
    {
      name: "RGBD SLAM",
      pictures: [
        {
          img: require("./src/assets/portfolio/slam/slam-1.jpg")
        },
        // {
        //   img: require("./src/assets/portfolio/noq/one.png")
        // },
        // {
        //   img: require("./src/assets/portfolio/noq/two.png")
        // },
        // {
        //   img: require("./src/assets/portfolio/noq/three.png")
        // },
        // {
        //   img: require("./src/assets/portfolio/noq/four.png")
        // }
      ],
      technologies: ["Robotics", "Computer Vision", "SLAM", "OpenCV"],
      category: "Algorithm",
      date: "Sep, 2019 - Dec  , 2019",
      github: "https://github.com/hujunhan/RGBD-SLAM",
      visit: "https://github.com/hujunhan/RGBD-SLAM",
      description:
        "This is a Simultaneous localization and mapping (SLAM) program that using a Intel RealSense RGBD (RGB with depth) camera. It can run real-time as a odometry to calculate the path the robot goes"
    },
    {
      name: "RRT in ROS",
      pictures: [
        {
          img: require("./src/assets/portfolio/rrt/rrt-1.jpg")
        },
        // {
        //   img: require("./src/assets/portfolio/post/two.png")
        // }
      ],
      technologies: [
        "Robotics",
        "Path Planning",
        "Artificial Intelligence",
        "ROS",
        "Ubuntu"
      ],
      category: "Algorithm",
      github: "https://github.com/hujunhan/ROS-RRT",
      date: "Oct, 2019 - Nov, 2019",
      visit: "https://github.com/hujunhan/ROS-RRT",
      description:
        "Robot Operating System (ROS) is a robotics algorithm framework running on Ubuntu, this project add a new path planning algorithm (RRT) to the existing library, it can help robot find a viable path in workspace quickly and robustly"
    },
    // {
    //   name: "Suicide Analyzer",
    //   pictures: [
    //     {
    //       img: require("./src/assets/portfolio/suicide/suicide-analyzer.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/suicide/suicide2-original.png")
    //     }
    //   ],
    //   technologies: ["Node", "Angular", "Express", "Leaflet", "Pandas"],
    //   category: "Website",
    //   date: "Oct, 2018 - Nov, 2018",
    //   github: "https://github.com/hrishikeshpaul/whodata",
    //   visit: "https://skylarktiral.herokuapp.com/",
    //   description:
    //     "This is a web application, uses a map to demonstrate the number suicides committed around the globe, according to a dataset provided by the WHO. The application consists of a Leaflet map that colors every nation, based on the number of suicides that have been committed in that country, for that year. It provides us with the capability to select the data as well as the continent."
    // },
    // {
    //   name: "Sentiment Analyzer",
    //   pictures: [
    //     {
    //       img: require("./src/assets/portfolio/smit/one.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/smit/two.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/smit/three.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/smit/four.png")
    //     }
    //   ],
    //   technologies: ["LSTM", "Keras", "Angular", "Tweepy", "Heroku", "Python"],
    //   category: "Alogrithm",
    //   date: "Feb, 2018 - Apr  , 2018",
    //   github: "https://github.com/hrishikeshpaul/sih",
    //   visit: "https://angel.co/projects/1009777-sentiment-analysis",
    //   description:
    //     "Developing this for the final round of Smart India Hackathon 2018, the web application is a platform for showcasing the sentiment of the tweets of the people in the Telangana region in India on policy satisfaction, services and problem definitions. The minimal UI design consists of different bins, that have their respective tweets, all scraped from twitter. There is also a simple graphical representation denoting the sentiment of the tweets."
    // },
    // {
    //   name: "Clumpr",
    //   pictures: [
    //     {
    //       img: require("./src/assets/portfolio/clumpr/logo.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/clumpr/one.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/clumpr/two.png")
    //     }
    //   ],
    //   technologies: ["Node", "Angular", "Express", "MySQL", "Facebook API"],
    //   category: "Web App",
    //   github: "https://github.com/hrishikeshpaul/clumpr",
    //   date: "Sep, 2017 - Nov, 2017",
    //   visit: "https://github.com/hrishikeshpaul/clumpr",
    //   description:
    //     'Clumpr is an online social event planning assistant that - using information about similar events happening in similar locations around the same time, friends who frequently attend the same events, and mutual friends - helps users to collaborate, combine, and attend events together, effectively "clumping" people and activities in a way that makes intuitive sense.'
    // },
    // {
    //   name: "Nutricare",
    //   pictures: [
    //     {
    //       img: require("./src/assets/portfolio/nc/one.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/nc/two.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/nc/three.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/nc/four.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/nc/five.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/nc/six.png")
    //     }
    //   ],
    //   technologies: ["Node", "Angular", "Express", "MongDB", "Medical"],
    //   category: "Website",
    //   github: "https://github.com/hrishikeshpaul/clumpr",
    //   date: "May, 2017 - Aug, 2017",
    //   visit: "https://angel.co/projects/576300-nutricare",
    //   description:
    //     "Nutricare is a basic health website for users(patients) to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects (patient) for a particular problem statement. Typically, a researcher will enter food item consumed by subjects over a period of time (Ex - 24hrs, or 1 week, or 1 month etc)."
    // }
  ],
  portfolio_design: [
    {
      name: "Shenzhen",
      title: "Photograph in Shenzhen",
      pictures: [
        {
          img: require("./src/assets/designs/shenzhen/shenzhen1.jpeg"),
          title: "Cloud"
        },
        {
          img: require("./src/assets/designs/shenzhen/shenzhen2.jpeg"),
          title: "Night"
        },
        {
          img: require("./src/assets/designs/shenzhen/shenzhen3.jpeg"),
          title: "Night 2"
        },
        {
          img: require("./src/assets/designs/shenzhen/shenzhen4.jpeg"),
          title: "City"
        },
        {
          img: require("./src/assets/designs/shenzhen/shenzhen5.jpeg"),
          title: "Bear"
        },
      ],
      technologies: ["Photograph", "Shenzhen"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - Jun, 2020",
      visit: "",
      description:
        "Shenzhen is an interesting city lay in the south of China, it's both modern and old, you can see how city grows in the wild"
    },
    {
      name: "Huzhou",
      title: "Huzhou - My hometwon",
      pictures: [
        {
          img: require("./src/assets/designs/huzhou/huzhou1.jpeg"),
          title: "Lake"
        },
        {
          img: require("./src/assets/designs/huzhou/huzhou2.jpeg"),
          title: "Sunset from home"
        },
        {
          img: require("./src/assets/designs/huzhou/huzhou3.jpeg"),
          title: "Special drink for summer"
        },
        {
          img: require("./src/assets/designs/huzhou/huzhou4.jpeg"),
          title: "Shared Bike"
        },
      ],
      technologies: ["Photograph", "Hometown"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "My hometown, a peaceful city where nobody rush"
    },
    // {
    //   name: "Bunder",
    //   title: "Bunder - MVP Proposal",
    //   pictures: [
    //     {
    //       img: require("./src/assets/designs/bunder/Moodboard.png"),
    //       title: "Moodboard"
    //     },
    //     {
    //       img: require("./src/assets/designs/bunder/Mockup 1.png"),
    //       title: "Mockup 1"
    //     },
    //     {
    //       img: require("./src/assets/designs/bunder/Mockup 2.png"),
    //       title: "Mockup 2"
    //     },
    //     {
    //       img: require("./src/assets/designs/bunder/Mockup 3.png"),
    //       title: "Mockup 3"
    //     },
    //     {
    //       img: require("./src/assets/designs/bunder/Market Research 1.png"),
    //       title: "Market Research 1"
    //     },
    //     {
    //       img: require("./src/assets/designs/bunder/Market Research 2.png"),
    //       title: "Market Research 2"
    //     }
    //   ],
    //   technologies: ["XD", "Illustrator"],
    //   category: "Visual Design",
    //   github: "",
    //   date: "May, 2020 - July, 2020",
    //   visit: "",
    //   description:
    //     "Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them. Our aim is two-fold - Co-existing and Collaboration. The former is executed by providing a platform for communities that are geographically positioned in the same proximity (Housing societies, Dorms, Apartment Complexes) to have and share data (exact apartment addresses, phone number, apartment housing rules, individuals tested positive for COVID-19) in an exclusive platform. The latter is to give these people in the community the ability to carry out a task you are physically or remotely unable to do; with dignity and ease."
    // }
  ],
  // recommendations: [
  //   {
  //     title:
  //       "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
  //     author: "Ushanas Shastri",
  //     position: "CTO",
  //     company: "Viteos Capital Market Services",
  //     location: "Mumbai"
  //   },
  //   {
  //     title:
  //       "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
  //     author: "Anil Dukkipatty",
  //     position: "CTO",
  //     company: "Elemential Labs",
  //     location: "Mumbai"
  //   },
  //   {
  //     title:
  //       "He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
  //     author: "Chintan Shah",
  //     position: "Director",
  //     company: "Hridayam Soft Solution",
  //     location: "Mumbai"
  //   },
  //   {
  //     title:
  //       "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
  //     author: "Mrinal Pai",
  //     position: "Co-Founder & Director",
  //     company: "Skylark Drones",
  //     location: "Bangalore"
  //   }
  // ]
};

export default info;
