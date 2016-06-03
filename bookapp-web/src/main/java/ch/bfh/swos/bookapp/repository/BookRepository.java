package ch.bfh.swos.bookapp.repository;

import ch.bfh.swos.bookapp.model.Book;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by rovi on 03.06.16.
 */
@RepositoryRestResource(path = "books")
public interface BookRepository extends PagingAndSortingRepository<Book, String> {
}
