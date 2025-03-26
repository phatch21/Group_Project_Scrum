"use client";

import React, { useState } from "react";
import styles from "./Orchard.module.css";

function Orchard() {
  return (
    <div className={styles.orchard}>
      <StatusBar />
      <StatusBarOverlay />
      <h1 className={styles.myOrchard}>My Orchard</h1>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7760160-0cc0-4e16-a481-4f60c1c7f94a?placeholderIfAbsent=true&apiKey=5ebd5efb00a44aa4b2a0aca6e8876be5"
        alt="Orchard visualization"
        className={styles.img4}
      />
      <ActionButtons />
      <BottomSection />
      <HomeIndicator />
    </div>
  );
}

function StatusBar() {
  return (
    <header className={styles.statusBarIPhone}>
      <div className={styles.frame}>
        <time className={styles.time}>9:41</time>
        <div className={styles.dynamicIslandspacer} />
        <div className={styles.levels}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d00ba8d75ff30c2745af03ba4a1f73eb41e3152?placeholderIfAbsent=true&apiKey=5ebd5efb00a44aa4b2a0aca6e8876be5"
            alt="Signal strength"
            className={styles.img}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbc4aff2c2b33428e59d83fba2d516b1b5edd07d?placeholderIfAbsent=true&apiKey=5ebd5efb00a44aa4b2a0aca6e8876be5"
            alt="Battery level"
            className={styles.img2}
          />
        </div>
      </div>
    </header>
  );
}

function StatusBarOverlay() {
  return (
    <header className={styles.statusBarIPhone2}>
      <div className={styles.frame}>
        <time className={styles.time}>9:41</time>
        <div className={styles.dynamicIslandspacer} />
        <div className={styles.levels}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d00ba8d75ff30c2745af03ba4a1f73eb41e3152?placeholderIfAbsent=true&apiKey=5ebd5efb00a44aa4b2a0aca6e8876be5"
            alt="Signal strength"
            className={styles.img}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbc4aff2c2b33428e59d83fba2d516b1b5edd07d?placeholderIfAbsent=true&apiKey=5ebd5efb00a44aa4b2a0aca6e8876be5"
            alt="Battery level"
            className={styles.img3}
          />
        </div>
      </div>
    </header>
  );
}

function ActionButtons() {
  return (
    <>
      <button className={styles.addFriend}>Add Friend</button>
      <button className={styles.sendMessage}>Send Message</button>
      <button className={styles.listView}>List View</button>
    </>
  );
}

function BottomSection() {
  return (
    <section className={styles.div}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1082b70341384a9de8cf54364d2d261390287635?placeholderIfAbsent=true&apiKey=5ebd5efb00a44aa4b2a0aca6e8876be5"
        alt="Background decoration"
        className={styles.img5}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c0144641584cc653184b6fa5f61dc14943ede69?placeholderIfAbsent=true&apiKey=5ebd5efb00a44aa4b2a0aca6e8876be5"
        alt="Navigation bar"
        className={styles.img6}
      />
    </section>
  );
}

function HomeIndicator() {
  return (
    <div className={styles.homeIndicator}>
      <div className={styles.homeIndicator2} />
    </div>
  );
}

export default Orchard;
