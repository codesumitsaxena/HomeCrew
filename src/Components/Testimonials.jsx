import React from 'react';

const testimonials = [
  {
    name: "Suresh Kumar",
    desc: "Booked an electrician for fan repair. The technician arrived on time, explained the issue clearly, and fixed it within an hour. Charges were reasonable and the service was prompt and professional. Will surely book again!",
    img: "https://randomuser.me/api/portraits/men/34.jpg"
  },
  {
    name: "Aarti Deshmukh",
    desc: "Got my home deep cleaned before Diwali. The team was punctual, carried all necessary equipment, and cleaned every corner—tiles, fans, windows, and even under beds. Very impressed with the detailing and professionalism.",
    img: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  {
    name: "Manoj Verma",
    desc: "AC servicing was smooth and efficient. The technician was polite and did a complete cleanup of the filters, vents, and even gave maintenance tips. Cool air returned instantly. Superb experience!",
    img: "https://randomuser.me/api/portraits/men/24.jpg"
  },
  {
    name: "Kavita Joshi",
    desc: "Tried at-home beauty services for facial and waxing. The beautician maintained hygiene, wore gloves and mask, and created a peaceful spa-like experience right in my bedroom. Will definitely rebook.",
    img: "https://randomuser.me/api/portraits/women/56.jpg"
  },
  {
    name: "Rajeev Singh",
    desc: "Faced a plumbing issue with the kitchen sink. The plumber fixed the leak within 30 minutes and shared useful tips to avoid future clogs. Clean, courteous, and absolutely hassle-free.",
    img: "https://randomuser.me/api/portraits/men/62.jpg"
  },
  {
    name: "Pooja Sharma",
    desc: "Booked facial and threading service. The beautician was polite, came with all equipment, and ensured I was comfortable. She followed safety protocols throughout. Impressive service quality!",
    img: "https://randomuser.me/api/portraits/women/29.jpg"
  },
  {
    name: "Deepak Thakur",
    desc: "Had new ceiling lights installed. The electrician was sharp, neat in work, and respectful of the home. He cleaned the area after finishing and made sure everything worked well. Highly satisfied.",
    img: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    name: "Meena Pillai",
    desc: "Customer support helped me select the right cleaning package and coordinated with the staff till completion. Loved the seamless booking experience and personal follow-ups. A very customer-centric platform!",
    img: "https://randomuser.me/api/portraits/women/18.jpg"
  }
];
const moreTestimonials = [
  {
    name: "Ritika Malhotra",
    desc: "Booked an at-home hair spa and the beautician did a fantastic job. She was gentle, explained each step, and used great quality products. My hair felt super soft and looked shiny afterward. Relaxing experience!",
    img: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    name: "Aditya Jain",
    desc: "Needed quick help with my broken wardrobe. The carpenter aligned the door properly, fixed loose screws, and gave it a polished look. Punctual, tidy, and highly skilled work. Very professional.",
    img: "https://randomuser.me/api/portraits/men/37.jpg"
  },
  {
    name: "Neha Kapoor",
    desc: "Took a makeup and hairstyling service for a friend’s wedding. The artist was skilled, patient, and delivered exactly the glam look I had imagined. Got tons of compliments throughout the evening!",
    img: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "Rohit Sinha",
    desc: "Bathroom deep cleaning service exceeded expectations. Every tile, corner, and fitting was left sparkling. They removed all hard water stains and cleaned the grout as well. Superb attention to detail!",
    img: "https://randomuser.me/api/portraits/men/42.jpg"
  },
  {
    name: "Ananya Rao",
    desc: "Yoga sessions at home were relaxing and personalized. The trainer guided me with stretches, corrected postures, and adjusted intensity as per my body needs. I feel healthier and more focused!",
    img: "https://randomuser.me/api/portraits/women/26.jpg"
  },
  {
    name: "Kunal Thakur",
    desc: "Booked microwave repair and the technician arrived quickly. Diagnosed the issue, replaced a fuse, and ensured the microwave worked smoothly. Saved me from buying a new one. Great value for money!",
    img: "https://randomuser.me/api/portraits/men/26.jpg"
  },
  {
    name: "Divya Sharma",
    desc: "Took their festive house cleaning package. The team was thorough—from fans to floors—and made my house guest-ready. Didn’t need to supervise a thing. Fantastic experience all around.",
    img: "https://randomuser.me/api/portraits/women/49.jpg"
  },
  {
    name: "Rahul Mishra",
    desc: "Had a lighting issue across rooms. The electrician was patient, checked connections thoroughly, and fixed the flickering without any extra fuss. He even tested all switches before leaving.",
    img: "https://randomuser.me/api/portraits/men/46.jpg"
  }
];

  

function Testimonials() {
  return (
    <div className="bg-light py-5 overflow-hidden">
      <div className="container">
        <h3 className="mb-4 fs-1 fw-bold">What <span style={{color:"#8a6ff2"}}>our clients </span>,<br/><span style={{color:"#8a6ff2"}}>say about</span>our work</h3>

        <div className="d-flex flex-nowrap gap-4 scroll-animation">
          {testimonials.map((item, index) => (
            <div
              className="bg-white border rounded-4 shadow-sm p-3 flex-shrink-0"
              style={{ width: '340px' }}
              key={index}
            >
              <div className="d-flex align-items-center mb-2 gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-circle"
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                />
                <h6 className="mb-0 fw-semibold">{item.name}</h6>
              </div>
              <p className="mb-0 text-muted small">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="d-flex flex-nowrap my-3 gap-4 scroll-animation2">
          {moreTestimonials.map((item, index) => (
            <div
              className="bg-white border rounded-4 shadow-sm p-3 flex-shrink-0"
              style={{ width: '340px' }}
              key={index}
            >
              <div className="d-flex align-items-center mb-2 gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-circle"
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                />
                <h6 className="mb-0 fw-semibold">{item.name}</h6>
              </div>
              <p className="mb-0 text-muted small">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
