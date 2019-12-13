import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Player } from '../player/player.model';
import{MatDialog} from '@angular/material'
// TODO: Replace this with your own data model type
export interface GuestTableItem {
  player: string;
  rank: number;
  score:Number;
  timePlayed: String;
  gamesPlayed: string;
  status: boolean;

}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: GuestTableItem[] = [
  {player: 'Admin', rank: 0,score:0,timePlayed:'0 days',gamesPlayed:'None',status: true},
  {player: 'test', rank: 5,score:50,timePlayed:'8 days',gamesPlayed:'minecraft',status: false},
  {player: 'Bob', rank: 7,score:100,timePlayed:'3 days',gamesPlayed:'league',status: true},
  {player: 'zain', rank: 1,score:10000,timePlayed:'50 days',gamesPlayed:'8-ball pool',status: true},
  {player: 'Rob', rank: 4,score:600,timePlayed:'100 days',gamesPlayed:'Mobile',status: false},
];

/**
 * Data source for the GuestTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class GuestTableDataSource extends DataSource<GuestTableItem> {
  data: GuestTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<GuestTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: GuestTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: GuestTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'player': return compare(a.player, b.player, isAsc);
        case 'rank': return compare(+a.rank, +b.rank, isAsc);
        case 'score': return compare(+a.score, +b.score, isAsc);
        case 'time': return compare(+a.timePlayed, +b.timePlayed, isAsc);
        case 'gamesPlayed': return compare(+a.gamesPlayed, +b.gamesPlayed, isAsc);
        case 'status': return compare(+a.status, +b.status, isAsc);
        default: return 0;
      }
    });
  }

}



/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
