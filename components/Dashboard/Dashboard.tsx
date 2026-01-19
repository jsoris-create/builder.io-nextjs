"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

interface TableRow {
  id: number;
  name: string;
  dateOfBirth: string;
  jobTitle: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  joinDate: string;
  status: string;
}

interface StatCard {
  id: number;
  label: string;
  value: string;
  change: string;
  icon: string;
}

interface DashboardProps {
  balance?: string;
}

type TabType = "dashboard" | "events" | "users";

function Dashboard({ balance = "$ 1,893.44" }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");

  const statsData: StatCard[] = [
    { id: 1, label: "Total Users", value: "1,240", change: "+12% from last month", icon: "users" },
    { id: 2, label: "Total Revenue", value: "$45,231.89", change: "+8% from last month", icon: "revenue" },
    { id: 3, label: "Active Sessions", value: "342", change: "+23% from last week", icon: "sessions" },
    { id: 4, label: "Conversion Rate", value: "3.24%", change: "-2% from last month", icon: "conversion" },
  ];

  const tableData: TableRow[] = [
    { id: 1, name: "Darlene Robertson", dateOfBirth: "02/07/1971", jobTitle: "Dog Trainer" },
    { id: 2, name: "Ronald Richards", dateOfBirth: "28/03/1968", jobTitle: "Marketing Head" },
    { id: 3, name: "Jenone Bell", dateOfBirth: "12/08/1985", jobTitle: "President of Sales" },
    { id: 4, name: "Leslie Alexander", dateOfBirth: "15/11/1980", jobTitle: "UI Designer" },
    { id: 5, name: "Michael Scott", dateOfBirth: "22/05/1975", jobTitle: "Regional Manager" },
  ];

  const usersData: User[] = [
    { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", joinDate: "15/01/2024", status: "Active" },
    { id: 2, name: "Bob Smith", email: "bob.smith@example.com", joinDate: "22/02/2024", status: "Active" },
    { id: 3, name: "Carol Williams", email: "carol.williams@example.com", joinDate: "08/03/2024", status: "Inactive" },
    { id: 4, name: "David Brown", email: "david.brown@example.com", joinDate: "14/04/2024", status: "Active" },
    { id: 5, name: "Emma Davis", email: "emma.davis@example.com", joinDate: "29/04/2024", status: "Active" },
    { id: 6, name: "Frank Wilson", email: "frank.wilson@example.com", joinDate: "05/05/2024", status: "Active" },
    { id: 7, name: "Grace Lee", email: "grace.lee@example.com", joinDate: "18/05/2024", status: "Inactive" },
    { id: 8, name: "Henry Martinez", email: "henry.martinez@example.com", joinDate: "24/05/2024", status: "Active" },
  ];

  return (
    <div className={styles.dashboard}>
      {/* Top Navigation */}
      <nav className={styles.topNav}>
        <div className={styles.topNavLeft}>
          <svg className={styles.sunIcon} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 0V4.5H19.5V0H16.5ZM6.33398 4.21289L4.21289 6.33398L7.39453 9.51562L9.51562 7.39453L6.33398 4.21289ZM29.666 4.21289L26.4844 7.39453L28.6055 9.51562L31.7871 6.33398L29.666 4.21289ZM18 7.5C12.2188 7.5 7.5 12.2188 7.5 18C7.5 23.7812 12.2188 28.5 18 28.5C23.7812 28.5 28.5 23.7812 28.5 18C28.5 12.2188 23.7812 7.5 18 7.5ZM18 10.5C22.1599 10.5 25.5 13.8401 25.5 18C25.5 22.1599 22.1599 25.5 18 25.5C13.8401 25.5 10.5 22.1599 10.5 18C10.5 13.8401 13.8401 10.5 18 10.5ZM0 16.5V19.5H4.5V16.5H0ZM31.5 16.5V19.5H36V16.5H31.5ZM7.39453 26.4844L4.21289 29.666L6.33398 31.7871L9.51562 28.6055L7.39453 26.4844ZM28.6055 26.4844L26.4844 28.6055L29.666 31.7871L31.7871 29.666L28.6055 26.4844ZM16.5 31.5V36H19.5V31.5H16.5Z" fill="#545F71"/>
          </svg>
          <div className={styles.brandName}>Knackline</div>
        </div>
        <div className={styles.searchContainer}>
          <svg className={styles.searchIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#545F71"/>
          </svg>
          <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>
        <svg className={styles.accountIcon} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2.33333C7.56004 2.33333 2.33337 7.56 2.33337 14C2.33337 20.44 7.56004 25.6667 14 25.6667C20.44 25.6667 25.6667 20.44 25.6667 14C25.6667 7.56 20.44 2.33333 14 2.33333ZM8.24837 21.3267C8.75004 20.2767 11.8067 19.25 14 19.25C16.1934 19.25 19.2617 20.2767 19.7517 21.3267C18.165 22.5867 16.17 23.3333 14 23.3333C11.83 23.3333 9.83504 22.5867 8.24837 21.3267ZM21.42 19.635C19.7517 17.605 15.7034 16.9167 14 16.9167C12.2967 16.9167 8.24837 17.605 6.58004 19.635C5.39004 18.0717 4.66671 16.1233 4.66671 14C4.66671 8.855 8.85504 4.66667 14 4.66667C19.145 4.66667 23.3334 8.855 23.3334 14C23.3334 16.1233 22.61 18.0717 21.42 19.635ZM14 7C11.7367 7 9.91671 8.82 9.91671 11.0833C9.91671 13.3467 11.7367 15.1667 14 15.1667C16.2634 15.1667 18.0834 13.3467 18.0834 11.0833C18.0834 8.82 16.2634 7 14 7ZM14 12.8333C13.0317 12.8333 12.25 12.0517 12.25 11.0833C12.25 10.115 13.0317 9.33333 14 9.33333C14.9684 9.33333 15.75 10.115 15.75 11.0833C15.75 12.0517 14.9684 12.8333 14 12.8333Z" fill="#545F71"/>
        </svg>
      </nav>

      {/* Side Navigation */}
      <aside className={styles.sideNav}>
        <div className={styles.navItems}>
          <div
            className={`${styles.navItem} ${activeTab === "dashboard" ? styles.navItemActive : ""}`}
            onClick={() => setActiveTab("dashboard")}
          >
            <svg className={styles.navIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="#545F71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.navLabel}>Dashboard</span>
            <svg className={styles.chevronIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 4.16666L13.3333 9.99999L7.5 15.8333" stroke="#9BA5B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div
            className={`${styles.navItem} ${activeTab === "events" ? styles.navItemActive : ""}`}
            onClick={() => setActiveTab("events")}
          >
            <svg className={styles.navIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="#545F71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.navLabel}>Events</span>
            <svg className={styles.chevronIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 4.16666L13.3333 9.99999L7.5 15.8333" stroke="#9BA5B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div
            className={`${styles.navItem} ${activeTab === "users" ? styles.navItemActive : ""}`}
            onClick={() => setActiveTab("users")}
          >
            <svg className={styles.navIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4.35418C12.7329 3.52375 13.8053 3 15 3C17.2091 3 19 4.79086 19 7C19 9.20914 17.2091 11 15 11C13.8053 11 12.7329 10.4762 12 9.64582M15 21H3V20C3 16.6863 5.68629 14 9 14C12.3137 14 15 16.6863 15 20V21ZM15 21H21V20C21 16.6863 18.3137 14 15 14C13.9071 14 12.8825 14.2922 12 14.8027M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="#545F71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.navLabel}>Users</span>
            <svg className={styles.chevronIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 4.16668L13.3333 10L7.5 15.8333" stroke="#9BA5B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className={styles.navFooter}>
          <div className={styles.navItem}>
            <svg className={styles.navIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 16L7 12M7 12L11 8M7 12L21 12M16 16V17C16 18.6569 14.6569 20 13 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H13C14.6569 4 16 5.34315 16 7V8" stroke="#545F71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.navLabel}>Sign Out</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <>
            {/* Welcome Section */}
            <div className={styles.welcomeSection}>
              <h1 className={styles.welcomeTitle}>Welcome back, Sarah!</h1>
              <p className={styles.welcomeSubtitle}>Here's what's happening with your business today.</p>
            </div>

            {/* Statistics Cards */}
            <div className={styles.statsGrid}>
              {statsData.map((stat) => (
                <div key={stat.id} className={styles.statCard}>
                  <div className={styles.statCardHeader}>
                    <h3 className={styles.statLabel}>{stat.label}</h3>
                    <div className={styles.statIcon} data-icon={stat.icon}>
                      {stat.icon === "users" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 20H1v-2c0-2.25 2.235-3 3.5-3h10c1.265 0 3.5.75 3.5 3v2zm.5-10a2 2 0 100-4 2 2 0 000 4zm3.5 1h-5v-2h5v2zm4.5 7v-2h-5v2h5zm-5-11a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#545F71"/>
                        </svg>
                      )}
                      {stat.icon === "revenue" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" fill="#545F71"/>
                        </svg>
                      )}
                      {stat.icon === "sessions" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-2.16-2.66c-.3-.37-.85-.38-1.15-.04-.32.35-.02.88.35 1.16l2.74 3.32c.3.38.86.38 1.16 0l4.04-5.16c.32-.35.02-.88-.35-1.16-.32-.27-.85-.25-1.15.04z" fill="#545F71"/>
                        </svg>
                      )}
                      {stat.icon === "conversion" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 6l2.29 2.29-4.58 4.58-4-4L2 16.87V21h4.13L16 9.29 18.29 11.58 21 9V3h-5z" fill="#545F71"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statChange}>{stat.change}</div>
                </div>
              ))}
            </div>

            {/* Account Summary Cards */}
            <div className={styles.accountSummaryCards}>
              <div className={styles.accountCard}>
                <div className={styles.balanceAmount}>{balance}</div>
                <button className={`${styles.btn} ${styles.btnSecondary}`}>
                  <span className={styles.btnLabel}>Transfer</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4V9H4.58152M19.9381 11C19.446 7.05369 16.0796 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9M4.58152 9H9M20 20V15H19.4185M19.4185 15C18.2317 17.9318 15.3574 20 12 20C7.92038 20 4.55399 16.9463 4.06189 13M19.4185 15H15" stroke="#545F71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className={styles.accountCard}>
                <div className={styles.balanceAmount}>{balance}</div>
                <button className={`${styles.btn} ${styles.btnPrimary}`}>
                  <span className={styles.btnLabel}>Add money</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12M12 12V18M12 12H18M12 12L6 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Recent Team Section */}
            <div className={styles.recentSection}>
              <h2 className={styles.sectionTitle}>Recent Team Members</h2>
              <div className={styles.tableContainer}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th className={styles.tableHeader}>#</th>
                      <th className={styles.tableHeader}>Name</th>
                      <th className={styles.tableHeader}>Date of Birth</th>
                      <th className={styles.tableHeader}>Job Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row) => (
                      <tr key={row.id} className={styles.tableRow}>
                        <td className={styles.tableCell}>{row.id}</td>
                        <td className={styles.tableCell}>{row.name}</td>
                        <td className={styles.tableCell}>{row.dateOfBirth}</td>
                        <td className={styles.tableCell}>{row.jobTitle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Users Tab */}
        {activeTab === "users" && (
          <div className={styles.usersTabContainer}>
            <h2 className={styles.usersTabTitle}>Users</h2>
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.tableHeader}>#</th>
                    <th className={styles.tableHeader}>Name</th>
                    <th className={styles.tableHeader}>Email</th>
                    <th className={styles.tableHeader}>Join Date</th>
                    <th className={styles.tableHeader}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {usersData.map((user) => (
                    <tr key={user.id} className={styles.tableRow}>
                      <td className={styles.tableCell}>{user.id}</td>
                      <td className={styles.tableCell}>{user.name}</td>
                      <td className={styles.tableCell}>{user.email}</td>
                      <td className={styles.tableCell}>{user.joinDate}</td>
                      <td className={styles.tableCell}>
                        <span className={`${styles.statusBadge} ${user.status === "Active" ? styles.statusActive : styles.statusInactive}`}>
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === "events" && (
          <div className={styles.emptyStateContainer}>
            <h2 className={styles.emptyStateTitle}>Events</h2>
            <p className={styles.emptyStateText}>No events to display yet.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
