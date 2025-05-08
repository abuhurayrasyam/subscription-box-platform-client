import React from 'react';

const testimonials = [
  {
    name: "Sanjida",
    photo: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?t=st=1746711759~exp=1746715359~hmac=40cf1192371b9c757220ea0c327b343e01e260aeb226f92fb32e2f1cbabb31ee&w=996",
    rating: 5,
    review: "Every box feels like a surprise gift. I'm obsessed with the wellness themes!",
  },
  {
    name: "Dua",
    photo: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1746711781~exp=1746715381~hmac=bcbc3d0f02e7d681e097d2c39370b0de1654139245c6837eada05b05e9920414&w=996",
    rating: 4,
    review: "High-quality products and very thoughtful curation every month!",
  },
];

const Testimonials = () => {
  return (
    <div className="w-11/12 mx-auto py-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10">Customer Testimonials</h2>
      <div className="grid gap-8 md:grid-cols-2 w-11/12 mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white border border-gray-300 p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <img src={testimonial.photo} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4" />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <div className="text-yellow-500 text-sm">
                  {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
