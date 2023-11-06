import React from 'react';



const Dashboard = () => {
  return (
    <div>
     
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="card">
              <div className="card-body">
                <p>Working Hours</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card">
              <div className="card-body">
                <p>Best Results</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card">
              <div className="card-body">
                <p>Pomodoro Timer</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="d-grid gap-2 text-center mt-4">
          <div className="p-2">In Progress Tasks</div>
          <div className="p-2">Completed Tasks</div>
          <div className="p-2">Time Spent</div>
        </div>
        </div>
        </div>
       
  
  );
};

export default Dashboard;
