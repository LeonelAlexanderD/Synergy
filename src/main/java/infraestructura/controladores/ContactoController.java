package infraestructura.controladores;

import aplicacion.services.ClienteService;
import com.fasterxml.jackson.databind.ObjectMapper;
import dominio.Contacto;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/contacto")
public class ContactoController extends HttpServlet {

    private ObjectMapper mapper;
    private ClienteService service;

    public ContactoController(){
        this.mapper = new ObjectMapper();
        this.service = new ClienteService();
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        configureCorsHeaders(resp);
        Contacto contacto = this.mapper.readValue(req.getInputStream(), Contacto.class);
        service.saveContacto(contacto);
        resp.setStatus(HttpServletResponse.SC_OK);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        configureCorsHeaders(resp);
        String email = req.getParameter("email");

        if(email != null){
            Contacto contacto = service.findByEmail(email);

            if(contacto != null){
                resp.setStatus(200);
                resp.setContentType("application/json");
                resp.setCharacterEncoding("UTF-8");

                resp.getWriter().write(mapper.writeValueAsString(contacto));
            }else {
                resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
                resp.getWriter().write("Contacto no encontrado");
            }
        }
    }

    @Override
    protected void doOptions(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        configureCorsHeaders(resp);
    }

    private void configureCorsHeaders(HttpServletResponse resp){
        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Allow-Method", "POST, GET, DELETE, OPTION, PUT");
        resp.setHeader("Access-Control-Allow-Headers", "content-type");
    }
}
