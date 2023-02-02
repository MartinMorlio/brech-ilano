// import Link from "next/link";
import React from "react";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class={styles.div_container_ul}>
        <ul class={styles.container_ul}>
          <li class="nav-item">
            <a class="nav-link active" href="#">
              <img src="/brech-ilano.ico" alt="" width={100} />
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Inicio
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Marcas
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#scrollspyHeading3">
                  Adidas
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#scrollspyHeading4">
                  Nike
                </a>
              </li>
              <li>
                <span class="dropdown-divider"></span>
              </li>
              <li>
                <a class="dropdown-item" href="#scrollspyHeading5">
                  The Nort Face
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Sesión
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#scrollspyHeading3">
                  Iniciar Sesión
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#scrollspyHeading4">
                  Registrarse
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Carrito
            </a>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-sm-2"
            type="search"
            placeholder="Buscar..."
            spellcheck="false"
            data-ms-editor="true"
          />
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
