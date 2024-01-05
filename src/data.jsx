import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />,
  },
]

export const socials = [
  {
    id: 'facebook',
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 'twitter',
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 'linkedin',
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 'instagram',
    url: 'https://www.twitter.com',
    icon: <FaInstagram />,
  },
]
