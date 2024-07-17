package aplicacion.services;

import dominio.Contacto;
import dominio.Subscriptor;
import infraestructura.repository.MySQLRepositoryImpl;

public class ClienteService implements IPersistencia {

    private IPersistencia persistencia = new MySQLRepositoryImpl();

    @Override
    public void saveContacto(Contacto contacto) {
        persistencia.saveContacto(contacto);
    }

    @Override
    public Contacto findByEmail(String email) {
        return persistencia.findByEmail(email);
    }

    @Override
    public void saveSubscriptor(Subscriptor subscriptor) {

    }
}
