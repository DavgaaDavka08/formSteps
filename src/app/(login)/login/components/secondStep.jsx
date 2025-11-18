export default function SecondPage({ formData, back }) {
  return (
    <div className="w-[400px] flex flex-col gap-4">
      <h1>Confirm Your Info</h1>

      <p>Username: {formData.userName}</p>
      <p>Email: {formData.email}</p>

      <button onClick={back}>Back</button>
    </div>
  );
}
