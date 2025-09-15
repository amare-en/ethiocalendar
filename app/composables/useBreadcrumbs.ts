import { useRoute } from 'vue-router';
import { computed } from 'vue';

export const useBreadcrumbs = () => {
  const route = useRoute();

  const items = computed(() => {
    // Start with the Home breadcrumb
    const breadcrumbs = [
      {
        title: 'Home',
        to: '/',
      },
    ];

    // Get the matched routes and build the trail
    route.matched.forEach((matchedRoute) => {
      // Ensure the route has a name and is not the root index page
      if (matchedRoute.name && matchedRoute.name !== 'index') {
        const path = matchedRoute.path;
        
        // Use the custom breadcrumb title from the route's meta or fallback to the route name
        const rawTitle = (matchedRoute.meta.breadcrumb || matchedRoute.name).toString();
        
        // Clean up the title (e.g., convert 'Holidays' to 'Holidays', 'holiday-name' to 'Holiday Name')
        const title = rawTitle.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        
        // Don't add a breadcrumb for the index of a directory if there's a dynamic child route
        if (path !== '/') {
            breadcrumbs.push({
                title: title,
                to: path,
            });
        }
      }
    });

    // The last item is the current page, so it should be disabled and non-linkable
    if (breadcrumbs.length > 0) {
      breadcrumbs[breadcrumbs.length - 1].disabled = true;
      delete breadcrumbs[breadcrumbs.length - 1].to; // Remove the link
    }
    
    return breadcrumbs;
  });

  return {
    items,
  };
};