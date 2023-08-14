import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EventType } from "../types";

export const useDataMutation = (
  event: EventType,
  queryKey: unknown[],
  // body: unknown,
) => {
  const queryClient = useQueryClient();

  // example
  const mutationFn = async () => {
    switch (event) {
      case "UPDATE_DATA":
        return () => undefined; // mutate data

      case "UPDATE_DATA":
        return () => undefined; // delete data
    }
  };

  return useMutation({
    mutationFn,
    onMutate: async (newTodo) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey });

      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData(queryKey);

      // Optimistically update to the new value
      queryClient.setQueryData(queryKey, (old: any) => [...old, newTodo]);

      // Return a context object with the snapshotted value
      return { previousTodos };
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(queryKey, context?.previousTodos);
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
  });
};
