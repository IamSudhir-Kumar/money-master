import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-poppins">
      {/* Header */}
      <header className="bg-white p-4 shadow-md">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Statistics Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Statistics</h2>
          {/* Placeholder for statistics components */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow-md">Stat 1</div>
            <div className="bg-white p-4 rounded shadow-md">Stat 2</div>
            <div className="bg-white p-4 rounded shadow-md">Stat 3</div>
          </div>
        </section>

        {/* Recent Activity Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          {/* Placeholder for recent activity components */}
          <ul>
            <li>Activity 1</li>
            <li></li>
            <li></li>
          </ul>
        </section>

        {/* Notifications Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          {/* Placeholder for notification components */}
          <ul>
            <li>Notification 1</li>
            <li>Notification 2</li>
            <li>Notification 3</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white p-4 shadow-md">
        <p className="text-sm text-gray-500">© 2023 MoneyMaster. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
