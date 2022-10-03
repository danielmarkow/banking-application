import Card from "./common/Card";

function Home() {

  return (
    <Card
        txtcolor="black"
        header="Bank Landing Page"
        title="Welcome to the Bank"
        text="You can use this bank"
        body={(<img src="bank.png" className="img-fluid" alt="responsive"/>)}

    />
  );
}

export default Home;