function OrderedList() {
  const items = ["Akash", "Aashu", "Sumit", "Shubham", "Shubh"];

  return (
    <ol>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
}

export default OrderedList;
