import { User } from "../model/User";
import { CardList } from "./CardList";
import { AvatarCard } from "./AvatarCard";
import { UserStore } from "../stores/UserStore";
import { observer } from "mobx-react-lite";
import "../App.css";

interface UserCardListProps {
  store: UserStore;
}

export const UserCardList = observer((props: UserCardListProps) => {
  const {
    searchTerm,
    onSearch,
    newAvatarUrl,
    newUserName,
    onAddUser,
    filteredItems: items,
    onNewUserNameChange,
    onNewAvatarChange,
    onDelete,
  } = props.store;

  return (
    <div>
      <div className="formStyle">
        <input
          placeholder="Search..."
          value={searchTerm}
          onChange={onSearch}
        ></input>

        <input
          placeholder="Avatar Url"
          value={newAvatarUrl}
          onChange={onNewAvatarChange}
        ></input>
        <input
          placeholder="User Name"
          value={newUserName}
          onChange={onNewUserNameChange}
        ></input>
      </div>
      <button onClick={onAddUser} className="button">
        Add new user
      </button>
      <CardList
        items={items}
        itemRenderer={(item: User) => (
          <AvatarCard
            item={{ id: item.id, title: item.username, avatar: item.avatar }}
            onDelete={onDelete}
            key={item.id}
          />
        )}
      />
    </div>
  );
});
