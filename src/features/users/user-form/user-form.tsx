import { Input } from "@/components/ui/input";
import { UserDetailsFormProps } from "./user-form.type";

const UserDetailsForm = ({ user }: UserDetailsFormProps) => {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      <Input type="text" label="Name" readOnly defaultValue={user?.name} />
      <Input
        type="text"
        label="Username"
        readOnly
        defaultValue={user?.username}
      />
      <Input type="text" label="Email" readOnly defaultValue={user?.email} />
      <Input type="text" label="Phone" readOnly defaultValue={user?.phone} />
      <Input
        type="text"
        label="Website"
        readOnly
        defaultValue={user?.website}
      />
      <Input
        type="text"
        label="Company"
        readOnly
        defaultValue={user?.company.name}
      />
      <Input
        type="text"
        label="Address"
        readOnly
        defaultValue={`${user?.address.city} - ${user?.address.street}`}
      />
      <Input
        type="text"
        label="ZIP Code"
        readOnly
        defaultValue={user?.address.zipcode}
      />
    </div>
  );
};

export default UserDetailsForm;
