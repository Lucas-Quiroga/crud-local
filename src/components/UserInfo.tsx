//renderizara la columna del usuario

const UserInfo = () => {
  return (
    <div className="d-flex flex-column ">
      <div className="d-flex gap-3 ball_container mt-2">
        <div className="ball" style={{ backgroundColor: "red" }}></div>
        <div className="ball" style={{ backgroundColor: "orange" }}></div>
        <div className="ball" style={{ backgroundColor: "green" }}></div>
      </div>

      <div className="data"> INFO DEL USER</div>
    </div>
  );
};

export default UserInfo;
