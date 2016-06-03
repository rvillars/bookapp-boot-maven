package ch.bfh.swos.bookapp.repository;

import ch.bfh.swos.bookapp.model.Author;
import ch.bfh.swos.bookapp.model.Book;
import org.springframework.data.rest.core.config.Projection;

import java.util.Date;

/**
 * Created by rovi on 03.06.16.
 */
@Projection(name = "inlineAuthor", types = Book.class)
public interface InlineAuthor {
    String getId();
    String getTitle();
    Date getReleasedate();
    Author getAuthor();
}
