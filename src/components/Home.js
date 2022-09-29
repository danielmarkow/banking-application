import Card from "./common/Card";

function Home() {

  return (
    <Card
        txtcolor="black"
        header="BadBank Landing Page"
        title="Welcome to the Bank"
        text="You can use this bank"
        body={(<img src="bank.png" className="img-fluid" alt="responsive image"/>)}

    />
  );
}

export default Home;