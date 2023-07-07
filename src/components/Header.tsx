//Este componente se encargará de renderizar el encabezado con los botones "All", "Complete" y "Active".
import { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  Container,
  Button,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";
import { todoContext } from "../context/TodoContext";
import { GiHamburgerMenu } from "react-icons/gi";
import "../styles/Header.css";

// Enumeración Filter
enum Filter {
  All = "All",
  Complete = "Complete",
  Active = "Active",
}

function Header() {
  const { handleFilterChange } = useContext(todoContext);
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    // Obtener el nombre de la ruta actual
    const path = location.pathname;
    let title = "";

    // Asignar el texto correspondiente según la ruta
    switch (path) {
      case "/":
        title = "All";
        break;
      case "/complete":
        title = "Complete";
        break;
      case "/active":
        title = "Active";
        break;
      default:
        title = "TASKS";
    }

    setPageTitle(title);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setShowDropdown(window.innerWidth <= 992);
    };

    handleResize(); // Verificar el tamaño de la pantalla al cargar la página

    window.addEventListener("resize", handleResize); // Escuchar cambios en el tamaño de la pantalla

    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el evento al desmontar el componente
    };
  }, []);

  return (
    <div className="d-flex justify-content-between mt-4">
      <h1
        style={{
          fontFamily: "monospace",
          display: `${showDropdown ? "none" : ""}`,
        }}
      >
        {pageTitle}
      </h1>
      <nav>
        <Container className="d-flex gap-4 justify-content-end">
          {showDropdown ? (
            <DropdownButton
              as={ButtonGroup}
              title={<GiHamburgerMenu />}
              id="bg-nested-dropdown"
              variant="secondary"
              className="filter-dropdown d-flex justify-content-end dropdownfilter zoom"
              style={{ zIndex: 1 }}
            >
              <Dropdown.Item
                eventKey="1"
                onClick={() => handleFilterChange(Filter.All)}
              >
                All
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="2"
                onClick={() => handleFilterChange(Filter.Complete)}
              >
                Complete
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="3"
                onClick={() => handleFilterChange(Filter.Active)}
              >
                Active
              </Dropdown.Item>
            </DropdownButton>
          ) : (
            <>
              <NavLink to="/">
                <Button
                  className="zoom"
                  style={{
                    background: "rgba(36, 36, 36, 0.7)",
                    border: "none",
                  }}
                  onClick={() => handleFilterChange(Filter.All)}
                >
                  All
                </Button>
              </NavLink>
              <NavLink to="/complete">
                <Button
                  className="zoom"
                  style={{
                    background: "rgba(36, 36, 36, 0.7)",
                    border: "none",
                  }}
                  onClick={() => handleFilterChange(Filter.Complete)}
                >
                  Complete
                </Button>
              </NavLink>
              <NavLink to="/active">
                <Button
                  className="zoom"
                  style={{
                    background: "rgba(36, 36, 36, 0.7)",
                    border: "none",
                  }}
                  onClick={() => handleFilterChange(Filter.Active)}
                >
                  Active
                </Button>
              </NavLink>
            </>
          )}
        </Container>
      </nav>
    </div>
  );
}

export default Header;
