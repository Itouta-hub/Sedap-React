import InputField from "./components/InputField";

export default function LoginForm(){
    return(
      <div>
        <InputField label="Nama" type="text" placeholder="Silahkan Ketik Nama..." />

        <InputField label="Email" type="email" placeholder="Silahkan Ketik Email..." />

        <InputField label="Tanggal Lahir" type="date" />
      </div>
    );
  }