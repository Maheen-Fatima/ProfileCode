
// This is an array (list) of objects

const navItems = [
    {
      id: 'home-button',
      icon: 'fas fa-home nav-icon',
      label: 'Home',
      href: '#',  // '#' used as placeholder to make a clickable link
    },
    {
      id: 'toggle-skills',  // toggle to get a drop down
      icon: 'fas fa-cogs nav-icon',
      label: 'Skills',
      href: '#',
    },
    {
      id: 'toggle-contact',
      icon: 'fas fa-address-book nav-icon',
      label: 'Contacts',
      href: '#',
    },
    {
      id: 'toggle-section',
      icon: 'fas fa-award nav-icon',
      label: 'Certificates&Awards',
      href: '#',
    },
    {
      id: 'projects-courses',
      icon: 'fas fa-project-diagram nav-icon',
      label: 'Projects&Courses',
      href: 'projects and courses.html',
    }
  ];

// Define a JavaScript object to hold video data
const videoData = {
  source: '/images/videoo.mp4',  // Path to the video file
  type: 'video/mp4',              // Type of the video
  autoplay: true,                  // Autoplay setting
  muted: true,                     // Muted setting
  loop: true                       // Loop setting
};





  // This function is responsible for creating and adding the navigation links to the page
    function populateNav() {
        // Find the <nav> element in the HTML
     const navElement = document.querySelector('nav');
    
    // Loop through each item in the navItems list
    navItems.forEach(item => {
      // Create an <a> (anchor/link) element
      const aTag = document.createElement('a');
       // Set the ID and link (href) for the anchor
      aTag.setAttribute('id', item.id);
      aTag.setAttribute('href', item.href);
  
      // Create icon i element
      const iconTag = document.createElement('i');
      iconTag.className = item.icon;
  
       // Add the icon and label text to the anchor (the link)
      aTag.appendChild(iconTag);
      aTag.appendChild(document.createTextNode(' ' + item.label));
  
     // Add the finished anchor (link) to the <nav> element
      navElement.appendChild(aTag);
    });
  }
// Function to populate the video element based on videoData
function populateVideo() {
    // Select the video frame element
    const videoFrame = document.querySelector('.video-frame');

    // Create video element
    const videoElement = document.createElement('video');

    // Set video attributes from the object
    videoElement.autoplay = videoData.autoplay;  // Set autoplay
    videoElement.muted = videoData.muted;        // Set muted
    videoElement.loop = videoData.loop;          // Set loop
    videoElement.className = 'bg-video';         // Set class name

    // Create source element
    const sourceElement = document.createElement('source');
    sourceElement.src = videoData.source;        // Set source path
    sourceElement.type = videoData.type;         // Set source type

    // Append source to video element
    videoElement.appendChild(sourceElement);

    // Append video element to video frame
    videoFrame.appendChild(videoElement);
}

// Call the function to populate the video
populateVideo();

  // Call the function on page load
  window.onload = populateNav;
  
          