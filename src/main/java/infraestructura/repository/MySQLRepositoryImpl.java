package infraestructura.repository;

import aplicacion.services.IPersistencia;
import dominio.Contacto;
import dominio.Subscriptor;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class MySQLRepositoryImpl implements IPersistencia {

    private Connection conexion;

    public MySQLRepositoryImpl(){
        this.conexion = DatabaseConection.getConnection();
    }

    @Override
    public void saveContacto(Contacto contacto) {
        String sql = "INSERT INTO contacto (nombre, email, telefono) VALUES (?, ?, ?)";

        try {
            PreparedStatement preparador = this.conexion.prepareStatement(sql);

            preparador.setString(1, contacto.getNombre());
            preparador.setString(2, contacto.getEmail());
            preparador.setInt(3, contacto.getTelefono());

            preparador.executeUpdate();
            preparador.close();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Contacto findByEmail(String email) {
        String sql = "SELECT * FROM contacto WHERE email = ?";

        try {
            PreparedStatement preparador = this.conexion.prepareStatement(sql);
            preparador.setString(1, email);

            ResultSet tablaVirtual = preparador.executeQuery();
            if (tablaVirtual.next()){
                Contacto contacto = new Contacto();
                contacto.setId(tablaVirtual.getInt("id"));
                contacto.setNombre(tablaVirtual.getString("nombre"));
                contacto.setEmail(tablaVirtual.getString("email"));
                contacto.setTelefono(tablaVirtual.getInt("telefono"));
                return contacto;
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return null;
    }

    @Override
    public void saveSubscriptor(Subscriptor subscriptor) {
        String sql = "INSERT INTO subscriptor (email) VALUES (?)";

        try {
            PreparedStatement preparador = this.conexion.prepareStatement(sql);

            preparador.setString(1, subscriptor.getEmail());

            preparador.executeUpdate();
            preparador.close();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
