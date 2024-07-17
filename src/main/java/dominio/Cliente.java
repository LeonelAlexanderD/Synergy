package dominio;

public abstract class Cliente {
    private String email;

    public Cliente(String email){
        this.email = email;
    }

    public Cliente() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
