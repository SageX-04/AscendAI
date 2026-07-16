import React from 'react';

const Stats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-10">
      <div className="text-center">
        <h3 className="text-3xl font-bold">10,000+</h3>
        <p className="text-gray-400">Students Guided</p>
      </div>
      
      <div className="text-center">
        <h3 className="text-3xl font-bold">500+</h3>
        <p className="text-gray-400">Career Paths</p>
      </div>

      <div className="text-center">
        <h3 className="text-3xl font-bold">95%</h3>
        <p className="text-gray-400">Resume Success Rate</p>
      </div>

      <div className="text-center">
        <h3 className="text-3xl font-bold">24/7</h3>
        <p className="text-gray-400">AI Support</p>
      </div>
    </div>
  );
};

export default Stats;