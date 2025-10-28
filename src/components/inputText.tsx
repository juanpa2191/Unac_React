type props = {
  value: string;
  label: string;
  arreglo?: string[];
  masaCorporal: number;
};

function InputText({ value, label }: props) {
  return( 
    <div>
        <label>{label}</label>
        <input type="text" defaultValue={value} />
    </div>
);
}
export default InputText;