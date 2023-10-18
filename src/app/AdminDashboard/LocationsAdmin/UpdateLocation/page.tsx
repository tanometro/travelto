export default function UpdateLocation(){
  return (
    <div>
      <form action="submint">
        <label htmlFor="name">Name</label>
        <input type="text" />
        <label htmlFor="city">City</label>
        <input type="text" />
        <label htmlFor="coord">Capital</label>
        <input type="text" />
        <label htmlFor="duration">Atractions</label>
        <input type="text" />
      </form>
      <button>Update Location</button>
    </div>
  );
}