import large from './large.png';
import leap from './boy.png';
import range from './range.png';
import shuffle from './shuffle.png';
import sort_descending from './sort-descending.png';
import swap from './swap.png';
import thermometer from './thermometer.png';
import timer_icon from './fast-time.png'
import cNet from './cNet.png';
import app_store_icon from './app-store.png'
import clc_md from './CalculateFactorial.txt';
import add_icon from './add.png';
import two_sum_icon from './lines.png';
import app_icon from './app.png';
import clock_icon from './clock.png';
import SortArrayAscending from '../Pages/Tools/SortArrayAscending';
import GetPrimeOnRange from '../Pages/Tools/ToolsItem/GetPrimeOnRange';
import FindFibonacci from '../Pages/Tools/ToolsItem/FindFibonacci';
import CheckPalindrome from '../Pages/Tools/ToolsItem/CheckPalindrome';
import ReverseString from '../Pages/Tools/ToolsItem/ReverseString';
import FindLargestNumber from '../Pages/Tools/ToolsItem/FindLargestNumber';
import ConvertTemperature from '../Pages/Tools/ToolsItem/ConvertTemperature';
import CheckLeapYear from '../Pages/Tools/ToolsItem/CheckLeapYear';
// import whiteboard from '../Pages/Tools/ToolsItem/WhiteBoard';
import AnalogClock from '../Components/AnalogComponent/AnalogComponent';
import youtube_icon from './youtube.png';
import video_icon from './video.png';
import insta_icon from './instagram.png';
import facebook_icon from './facebook.png';
import whatsapp_icon from './whatsapp.png';
import slide_one from './TRoc Tools (1).png'
import slide_two from './TRoc Tools (2).png'
import slide_three from './TRoc Tools (3).png'
import slide_four from './TRoc Tools (4).png'
import slide_five from './TRoc Tools (5).png'
import slide_six from './TRoc Tools.png';
import slide_right from './slide-right.png';
import slide_left from './swipe-left.png';
import user_icon from './user.png'
import GenerateRandomNumbers from '../Pages/Tools/GenerateRandomNumbers';
import NumberGuessing from '../Pages/Tools/GamesItem/NumberGuessing';
import GenerateRandomArray from '../Pages/Tools/ToolsItem/GenerateRandomArray';
import TodoList from '../Pages/Tools/ToolsItem/TodoList';
import RockPaperScissor from '../Pages/Tools/ToolsItem/RockPaperScissor';
import CrudOperation from '../Pages/Tools/GamesItem/CrudOperation';
import RazorPay from '../Pages/Tools/GamesItem/RazorPay';
import GenerateColor from '../Pages/Tools/CssItem/GenerateColor';
import Timer from '../Components/Projects/Timer';
import twoSum from '../Components/Projects/twoSum';
import TextToVoice from '../Components/Projects/TextToVoice';
import voice_search_icon from './voice-search.png'
import ImageUploader from '../Components/Projects/ImageUploder';
import image_upload_icon from './image-upload.png';
import text_editor_icon from './content-creator.png'
import TextEditor from '../Components/Projects/TextEditor';
import me from './me.jpeg';
import me_one from './me-one.jpg';


export const assets = {
  large,
  leap,
  range,
  shuffle,
  sort_descending,
  swap,
  thermometer,
  clc_md,
  youtube_icon,
  video_icon,
  insta_icon,
  whatsapp_icon,
  facebook_icon,
  slide_one,
  slide_two,
  slide_three,
  slide_four,
  slide_five,
  slide_six,
  app_store_icon,
  add_icon,
  app_icon,
  slide_left,
  slide_right,
  user_icon,
  cNet,
  timer_icon,
  voice_search_icon,
  image_upload_icon,
  text_editor_icon,
  me,
  me_one
};

export const escomData = [
  {
    _id: "1",
    name: "Get prime numbers between the range.",
    nickname: "Prime",
    category: "basic",
    image: range,
    url: GetPrimeOnRange
  },
  {
    _id: "3",
    name: "Find Fibonacci sequence.",
    nickname: "Fibo",
    category: "basic",
    image: shuffle,
    url: FindFibonacci
  },
  {
    _id: "4",
    name: "Check if a number is palindrome.",
    nickname: "Pali",
    category: "basic",
    image: swap,
    url: CheckPalindrome
  },
  {
    _id: "5",
    name: "Sort an array in ascending order.",
    nickname: "Ascending",
    category: "basic",
    image: large,
    url: SortArrayAscending
  },
  {
    _id: "6",
    name: "Reverse a string.",
    nickname: "Reverse",
    category: "basic",
    image: leap,
    url: ReverseString
  },
  {
    _id: "7",
    name: "Find largest number in an array.",
    nickname: "Large",
    category: "basic",
    image: large,
    url: FindLargestNumber
  },
  {
    _id: "8",
    name: "Convert temperature units.",
    nickname: "Temp",
    category: "basic",
    image: thermometer,
    url: ConvertTemperature
  },
  {
    _id: "9",
    name: "Check if a year is a leap year.",
    nickname: "Leap",
    category: "basic",
    image: leap,
    url: CheckLeapYear
  },
  {
    _id: "10",
    name: "Generate random numbers.",
    nickname: "Random",
    category: "basic",
    image: range,
    url: GenerateRandomNumbers
  },
  {
    _id: "11",
    name: "Analogue Clock",
    nickname: "Clock",
    category: "basic",
    image: clock_icon,
    url: AnalogClock
  },
  {
    _id: "12",
    name: "Number guessing game",
    nickname: "Number Guess",
    category: "basic",
    image: add_icon,
    url: NumberGuessing
  },
  {
    _id: "13",
    name: "Random array generating",
    nickname: "Random Array",
    category: "basic",
    image: app_icon,
    url: GenerateRandomArray
  },
  {
    _id: "14",
    name: "Todo list app",
    nickname: "Todo App",
    category: "basic",
    image: app_icon,
    url: TodoList
  },
  {
    _id: "15",
    name: "Rock paper scissor",
    nickname: "R-P-C",
    category: "basic",
    image: add_icon,
    url: RockPaperScissor
  },
  {
    _id: "16",
    name: "Crud operation in mongoose",
    nickname: "CRUD",
    category: "intermideate",
    image: app_store_icon,
    url: CrudOperation
  }
  ,
  {
    _id: "17",
    name: "Razorpay payment gateway",
    nickname: "Razorpay",
    category: "advanced",
    image: app_icon,
    url: RazorPay
  },
  {
    _id: "18",
    name: "Generate hexa code and rgb",
    nickname: "Color code",
    category: "basic",
    image: app_icon,
    url: GenerateColor
  },
  {
    _id: "19",
    name: "Count Down Timer",
    nickname: "Timer",
    category: "basic",
    image: timer_icon,
    url: Timer
  },
  {
    _id: "20",
    name: "Two sum returninng index",
    nickname: "Two sum",
    category: "basic",
    image: two_sum_icon,
    url: twoSum
  },
  {
    _id: "21",
    name: "Text to voice generator",
    nickname: "Text-Voice",
    category: "basic",
    image: voice_search_icon,
    url: TextToVoice
  },
  {
    _id: "22",
    name: "Image Uploader",
    nickname: "Image Up",
    category: "advanced",
    image: image_upload_icon,
    url: ImageUploader
  },
  {
    _id: "23",
    name: "Text Editor",
    nickname: "Text Board",
    category: "advanced",
    image: text_editor_icon,
    url: TextEditor
  }
];

export const courseCategory = [
  { _id: 1, name: 'HTML', img: app_icon },
  { _id: 2, name: 'CSS', img: app_icon },
  { _id: 3, name: 'JavaScript', img: app_icon },
  { _id: 4, name: 'React', img: app_icon },
  { _id: 5, name: 'Node.js', img: app_icon },
  { _id: 6, name: 'Express.js', img: app_icon },
  { _id: 7, name: 'MongoDB', img: app_icon },
  { _id: 8, name: 'SQL', img: app_icon },
  { _id: 9, name: 'PHP', img: app_icon },
  { _id: 10, name: 'Python', img: app_icon },
  { _id: 11, name: 'Java', img: app_icon },
  { _id: 12, name: 'C', img: app_icon },
  { _id: 13, name: 'C++', img: app_icon },
  { _id: 14, name: 'Data Structures & Algorithms', img: app_icon },
  { _id: 15, name: 'Git & GitHub', img: app_icon },
  { _id: 16, name: 'Bootstrap', img: app_icon },
  { _id: 17, name: 'Tailwind CSS', img: app_icon },
  { _id: 18, name: 'TypeScript', img: app_icon },
  { _id: 19, name: 'Next.js', img: app_icon },
  { _id: 20, name: 'GraphQL', img: app_icon },
  { _id: 21, name: 'Redux', img: app_icon },
  { _id: 22, name: 'Firebase', img: app_icon },
  { _id: 23, name: 'Docker', img: app_icon },
  { _id: 24, name: 'Kubernetes', img: app_icon },
  { _id: 25, name: 'AWS', img: app_icon }
];

export const blogsCategory = [
  { _id: 1, name: 'Technology', img: app_store_icon },
  { _id: 2, name: 'Courses', img: app_store_icon },
  { _id: 3, name: 'Programming', img: app_store_icon },
  { _id: 4, name: 'Others', img: app_store_icon }
]

export const shopCategory = [
  { _id: 1, name: 'Electronics', img: app_store_icon },
  { _id: 2, name: 'Websites', img: app_store_icon },
  { _id: 3, name: 'Single page tools', img: app_store_icon },
  { _id: 4, name: 'universal', img: app_store_icon }
]

export const blogData = [
  {
    _id: 1,
    feturedImg: "https://plus.unsplash.com/premium_photo-1679177184014-16746957e4cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    galleryImg: [],
    title: "The Future of AI in Technology",
    category: "Technology",
    author: "John Doe",
    content: "Artificial Intelligence (AI) is rapidly transforming various industries...",
    createdAt: "2025-02-18T10:00:00Z"
  },
  {
    _id: 2,
    feturedImg: "https://plus.unsplash.com/premium_photo-1683134105531-42032fc66937?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    galleryImg: [],
    title: "Top 5 Web Development Courses in 2025",
    category: "Courses",
    author: "Jane Smith",
    content: "Web development is a booming field. Here are the top 5 courses...",
    createdAt: "2025-02-18T11:00:00Z"
  },
  {
    _id: 3,
    feturedImg: "https://plus.unsplash.com/premium_photo-1673480195911-3075a87738b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    galleryImg: [],
    title: "Understanding JavaScript Closures",
    category: "Programming",
    author: "Alice Johnson",
    content: "JavaScript closures are an important concept to master...",
    createdAt: "2025-02-18T12:00:00Z"
  },
  {
    _id: 4,
    feturedImg: "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    galleryImg: [],
    title: "The Impact of Social Media on Society",
    category: "Others",
    author: "Robert Brown",
    content: "Social media has changed the way we communicate...",
    createdAt: "2025-02-18T13:00:00Z"
  },
  {
    _id: 5,
    feturedImg: "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    galleryImg: [],
    title: "Cloud Computing: The Next Big Thing",
    category: "Technology",
    author: "Emily White",
    content: "Cloud computing is revolutionizing businesses...",
    createdAt: "2025-02-18T14:00:00Z"
  },
  {
    _id: 6,
    feturedImg: "https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    galleryImg: [],
    title: "Best Data Science Courses for Beginners",
    category: "Courses",
    author: "David Lee",
    content: "Data science is an in-demand skill. These courses can help...",
    createdAt: "2025-02-18T15:00:00Z"
  },
  {
    _id: 7,
    feturedImg: "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    galleryImg: [],
    title: "How to Build a REST API with Node.js",
    category: "Programming",
    author: "Michael Green",
    content: "Creating a RESTful API using Node.js is simpler than you think...",
    createdAt: "2025-02-18T16:00:00Z"
  },
  {
    _id: 8,
    feturedImg: "https://plus.unsplash.com/premium_photo-1725356401065-b12922e64ee4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    galleryImg: [],
    title: "Mental Health and Productivity",
    category: "Others",
    author: "Sophia Wilson",
    content: "Maintaining good mental health is crucial for productivity...",
    createdAt: "2025-02-18T17:00:00Z"
  }
];

export const productData = [
  {
    _id: 1,
    featuredImg: "https://cdn.mos.cms.futurecdn.net/ThiXKkp4sA5QGWVKDWyt6g.jpg",
    galleryImg: [],
    title: "Wireless Noise-Canceling Headphones",
    category: "Electronics",
    brand: "Sony",
    price: 299.99,
    description: "Experience premium sound quality with advanced noise cancellation.",
    createdAt: "2025-02-18T10:00:00Z"
  },
  {
    _id: 2,
    featuredImg: "https://w3layouts.b-cdn.net//wp-content/uploads/2021/12/Shoppy-Kart-Website-Template-eCommerce-350x219.jpg",
    galleryImg: [],
    title: "E-commerce Website Template",
    category: "Websites",
    brand: "Custom",
    price: 99.99,
    description: "A fully responsive e-commerce website template built with React and Tailwind CSS.",
    createdAt: "2025-02-18T11:00:00Z"
  },
  {
    _id: 3,
    featuredImg: "https://smashingdocs.com/wp-content/uploads/2024/11/qr-code-templates-generator.png",
    galleryImg: [],
    title: "QR Code Generator",
    category: "Single Page Tools",
    brand: "Utility",
    price: "Free",
    description: "Generate QR codes instantly with our easy-to-use online tool.",
    createdAt: "2025-02-18T12:00:00Z"
  },
  {
    _id: 4,
    featuredImg: "https://5.imimg.com/data5/ECOM/Default/2023/4/302332988/PA/XU/KQ/40788096/image-bcabdfee-29db-405c-98dc-7a28106da233-500x500.jpg",
    galleryImg: [],
    title: "Universal Laptop Stand",
    category: "Universal",
    brand: "ErgoTech",
    price: 49.99,
    description: "An adjustable and portable laptop stand suitable for all laptop sizes.",
    createdAt: "2025-02-18T13:00:00Z"
  },
  {
    _id: 5,
    featuredImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1F2CL80l2wJhmFXXgvX7q2Mp_Ag_Oqx5yJA&s",
    galleryImg: [],
    title: "Smartwatch with Health Tracking",
    category: "Electronics",
    brand: "FitBit",
    price: 199.99,
    description: "Track your health and fitness with this advanced smartwatch.",
    createdAt: "2025-02-18T14:00:00Z"
  },
  {
    _id: 6,
    featuredImg: "https://w3layouts.b-cdn.net//wp-content/uploads/2022/12/UI-Portfolio-Website-Template-scaled.jpg",
    galleryImg: [],
    title: "Portfolio Website Template",
    category: "Websites",
    brand: "Custom",
    price: 49.99,
    description: "A sleek and modern portfolio website template for developers and designers.",
    createdAt: "2025-02-18T15:00:00Z"
  },
  {
    _id: 7,
    featuredImg: "https://eternitech.com/wp-content/plugins/eternitech-addons/assets/img/how-to-use-infographics-6.png",
    galleryImg: [],
    title: "Online JSON Formatter",
    category: "Single Page Tools",
    brand: "Utility",
    price: "Free",
    description: "Format and validate JSON data with this simple online tool.",
    createdAt: "2025-02-18T16:00:00Z"
  },
  {
    _id: 8,
    featuredImg: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    galleryImg: [],
    title: "Universal Wireless Charging Pad",
    category: "Universal",
    brand: "TechZone",
    price: 39.99,
    description: "Charge multiple devices wirelessly with this universal charging pad.",
    createdAt: "2025-02-18T17:00:00Z"
  }
];
