//renderizara la columna del usuario

const UserInfo = () => {
  return (
    <div className="d-flex gap-3 ball_container mt-2">
      <div className="ball" style={{ backgroundColor: "red" }}></div>
      <div className="ball" style={{ backgroundColor: "orange" }}></div>
      <div className="ball" style={{ backgroundColor: "green" }}></div>
      INFO DEL USER
    </div>
  );
};

export default UserInfo;
