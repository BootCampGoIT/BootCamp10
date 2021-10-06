export const adminRoutes = [
  {
    name: "courses",
    path: "/courses",
    component: () => <h2>Courses</h2>,
    exact: true,
  },
  {
    name: "groups",
    path: "/groups",
    component: () => <h2>Groups</h2>,
    exact: true,
  },
  {
    name: "tutors",
    path: "/tutors",
    component: () => <h2>Tutors</h2>,
    exact: true,
  },
];
