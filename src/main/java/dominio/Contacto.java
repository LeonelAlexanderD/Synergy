package dominio;

public class Contacto extends Cliente {
    private int id;
    private String nombre;
    private int telefono;

    public Contacto(String email, int id, String nombre, int telefono){
        super(email);
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
    }

    public Contacto(){
        super();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getTelefono() {
        return telefono;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }
}
