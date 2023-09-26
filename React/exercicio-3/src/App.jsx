import Card from "./components/Card"
import ana from "./assets/ana.png"
import aryane from "./assets/aryane.png"
import guilherme from "./assets/guilherme.png"

export default function App() {
    return (
        <>
            <Card profileImg={ana} 
                title="Ana Clara Fernandes" 
                desc="Maquiadora profisional desde 2023" 
                telefone="62 97859674"
                email="ana@hotmail.com" />

            <Card profileImg={aryane} 
                title="Aryane Gomes" 
                desc="Dentista formada na faculdade evagélica de goianésia" 
                telefone="62 98596325"
                email="aryane@hotmail.com" />

            <Card profileImg={guilherme} 
                title="Guilherme Fernandes" 
                desc="Programador web em desenvolvimento" 
                telefone="62 98429365"
                email="guilhermegfg2011@hotmail.com" />
             




            
        </>
    )
}