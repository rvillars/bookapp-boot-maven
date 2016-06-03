package ch.bfh.swos.bookapp;

import ch.bfh.swos.bookapp.model.Author;
import ch.bfh.swos.bookapp.model.Book;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

/**
 * Created by rovi on 03.06.16.
 */
@Configuration
public class DataRestConfig extends RepositoryRestConfigurerAdapter {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.setBasePath("/api");
        config.exposeIdsFor(Book.class);
        config.exposeIdsFor(Author.class);
        config.setReturnBodyOnCreate(true);
        config.setReturnBodyOnUpdate(true);
    }

}
