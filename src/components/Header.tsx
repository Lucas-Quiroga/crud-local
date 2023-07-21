import { useContext, useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom"; // Importar el hook useParams
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
  const { todoSection } = useParams(); // Obtener el parámetro de la ruta

  const [showDropdown, setShowDropdown] = useState(false);

  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    // Obtener el nombre de la ruta actual
    const path = location.pathname;
    let title = "";

    // Asignar el texto correspondiente según la ruta y el parámetro
    switch (path) {
      case "/todo":
        title = "All";
        break;
      case "/todo/complete":
        title = "Complete";
        break;
      case "/todo/active":
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
      <nav className="ms-auto">
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
              <NavLink to="/todo">
                <Button
                  className={`zoom ${
                    todoSection === undefined ? "active" : ""
                  }`}
                  style={{
                    background: "rgba(36, 36, 36, 0.7)",
                    border: "none",
                  }}
                  onClick={() => handleFilterChange(Filter.All)}
                >
                  All
                </Button>
              </NavLink>
              <NavLink to="/todo/complete">
                <Button
                  className={`zoom ${
                    todoSection === "complete" ? "active" : ""
                  }`}
                  style={{
                    background: "rgba(36, 36, 36, 0.7)",
                    border: "none",
                  }}
                  onClick={() => handleFilterChange(Filter.Complete)}
                >
                  Complete
                </Button>
              </NavLink>
              <NavLink to="/todo/active">
                <Button
                  className={`zoom ${todoSection === "active" ? "active" : ""}`}
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
