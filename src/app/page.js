"use client";
import React, { useState, useEffect } from "react";
import CardLenguajes from "./components/CardLenguajes";
import Modal from "./components/Modal";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>Lenguajes de Programación</h1>
      <CardLenguajes />
    </div>
  );
}
