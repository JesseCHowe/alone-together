"use client";

import { Provider } from 'react-redux';
import GridTable from "./components/Table/Table";
import Team from "./components/Team/Team";
import store from "./store/store";


export default function Home() {
  return (
    <Provider store={store}>
    <section>
      <h1>ALONE TOGETHER</h1>
      <Team/>
      <GridTable/>
    </section>
    </Provider>
  );
}
